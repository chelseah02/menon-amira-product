import pandas as pd
import string
import re
import numpy as np

"""
Compute the Damerau-Levenshtein distance between two given
strings (s1 and s2)
"""
def damerau_levenshtein_distance(s1, s2):
    d = {}
    lenstr1 = len(s1)
    lenstr2 = len(s2)
    for i in range(-1,lenstr1+1):
        d[(i,-1)] = i+1
    for j in range(-1,lenstr2+1):
        d[(-1,j)] = j+1

    for i in range(lenstr1):
        for j in range(lenstr2):
            if s1[i] == s2[j]:
                cost = 0
            else:
                cost = 1
            d[(i,j)] = min(
                           d[(i-1,j)] + 1, # deletion
                           d[(i,j-1)] + 1, # insertion
                           d[(i-1,j-1)] + cost, # substitution
                          )
            if i and j and s1[i]==s2[j-1] and s1[i-1] == s2[j]:
                d[(i,j)] = min (d[(i,j)], d[i-2,j-2] + cost) # transposition

    return d[lenstr1-1,lenstr2-1]/((lenstr1+lenstr2)/2)

"""
Check if the two words are similar at the 0.4 threshold
"""
def is_similar(s1, s2):
  if damerau_levenshtein_distance(s1,s2) > 0.4 and len(s1) >= 5 and len(s2) >= 5:
    return True
  return False

"""
Remove punctuation 
"""
def remove_punc(strlist):
  result = []
  for word in strlist:
    res = ''.join(e for e in word if e.isalnum())
    result.append(res)
  return result

def get_error_word(aligned_text, aligned_transcript, error_index):
  """
  function to get the words that are incorrect in the transcript based on the index. 
  :param aligned_text: the text that was showed to students aligned to the transcript of what the students said
  :param aligned_transcript: the transcript of what the student said aligned to the text that was showed
  :param error_inex: the index of the error in aligned text/transcript (aligned text and transcript have the same length)
  :return: index, the word that is correct, the word that is incorrectly said
  """
  result = []
  for index in error_index:
    comp = []
    comp.append(index)
    comp.append(aligned_text[index])
    comp.append(aligned_transcript[index])
    result.append(comp)
  return result

def to_int(index):
  result = []
  for i in index:
    i = int(i)
    result.append(i)
  return result

def classify(error_words, story_text, transcript):
    """
    A function for classifying the error types
    :param error_word (a list of error index, correct word, incorrect word)
    :param story_text (the sentence that is showed to students)
    :param transcript (the sentence that the students said)
    :return result: index of the error in the story_text and the error type
    """
    result = []
    for error in error_words:
      text = error[1] 
      trans = error[2]
      res = []

      # if the text is empty
      if text == '':
        if trans in story_text and trans in transcript: # student already said the correct word in transcript
          e = 'correct - repetition'
          id = story_text.index(trans)
        elif trans in story_text and trans not in transcript: # student made a close attempt before this word and got this word correctly
          e = 'correct - self-correction'
          id = story_text.index(trans)
        else: # student said something unrelated and cannot be found in the text
          e = 'miscue - unrelated chatter'
          id = error[0]
      
      # if the transcript is empty -> student did not make an attempt at saying the word -> skip
      elif trans == '':
        e = 'miscue - skip'
        id = story_text.index(text)
      
      # if the text and transcript words are aligned
      else:
        if trans in story_text: # if the word is already said -> self-repetition
          e = 'correct - repetition'
          id = story_text.index(trans)
        else:
          if is_similar(text, trans): # if the text and transcript sound/look similar enough
            if text in transcript: # and if the correct word is also said in the transcript -> self-correction
              e = 'correct - self-correction'
              id = story_text.index(text)
            else: # if the correct word was not said -> student made an attempt at saying something similar -> substition
              e = 'miscue - substitution'
              id = error[0]
          else: # if the aligned text and  aligned transcript do not look/sound similar -> no attempt was made -> unrelated chatter
            e = 'miscue - unrelated chatter'
            id = error[0]

      
      res.append(id)
      res.append(trans)
      res.append(e)
      result.append(res)
      
    return result

# we can use alignment for checking correct sentences. If classification = correct but not aligned, that means repetition or self-correct?
def match_score(alpha, beta, gap_penalty):
    """
    A function for determining the score between any two bases in alignment; helper function for needleman_wunsch
    :param alpha
    :param beta
    :param gap_penalty
    :return: mismatch_penalty (int)
    """
    match_award = 1
    mismatch_penalty = -1  # - scipy.spatial.distance.cosine(embeddings_map[alpha], embeddings_map[beta])
    if alpha == beta:
        return match_award
    elif alpha == '-' or beta == '-':
        return gap_penalty
    else:
        return mismatch_penalty

def needleman_wunsch(seq1, seq2):
    """
    :param seq1: First word sequence in list form (str[])
    :param seq2: Second word sequence in list form (str[])
    :return: Two lists corresponding to seq1 and seq2, respectively, that have placed the optimally aligned words in
    matching indices and padded using '-'.
    Example:
    Input
    seq1 = ['every', 'day', 'during', 'recess', 'mary', 'jason', 'and', 'their', 'classmates', 'played', 'together']
    seq2 = ['every', 'day', 'during', 'recess', 'mary', 'jason', 'and', 'the', 'their', 'classmates', 'played',
    'together', 'adam', 'day', 'played']
    Output
    align1 = ['every', 'day', 'during', 'recess', 'mary', 'jason', 'and', '-', 'their', 'classmates', 'played',
    'together', '-', '-', '-']
    align2 = ['every', 'day', 'during', 'recess', 'mary', 'jason', 'and', 'the', 'their', 'classmates', 'played',
    'together', 'adam', 'day', 'played']
    """
    # standard values
    gap_penalty = -1

    # store length of two sequences
    n = len(seq1)
    m = len(seq2)

    # generate matrix of zeros to store scores
    score = np.zeros((m + 1, n + 1))

    # calculate score table

    for i in range(0, m + 1):  # fill out first column
        score[i][0] = gap_penalty * i

    for j in range(0, n + 1):  # fill out first row
        score[0][j] = gap_penalty * j

    for i in range(1, m + 1):  # fill out all other values in the score matrix
        for j in range(1, n + 1):
            # calculate the score by checking the top, left, and diagonal cells
            match = score[i - 1][j - 1] + match_score(seq1[j - 1], seq2[i - 1], gap_penalty)
            delete = score[i - 1][j] + gap_penalty
            insert = score[i][j - 1] + gap_penalty

            # Record the maximum score from the three possible scores calculated above
            score[i][j] = max(match, delete, insert)

    # traceback and compute the alignment

    # create variables to store alignment
    align1 = []
    align2 = []

    # start from the bottom right cell in matrix
    i = m
    j = n

    # use i and j to keep track of where we are in the matrix, just like above
    while i > 0 and j > 0:  # end touching the top or the left edge
        score_current = score[i][j]
        score_diagonal = score[i - 1][j - 1]
        score_up = score[i][j - 1]
        score_left = score[i - 1][j]

        # figure out which cell the current score was calculated from, update i and j to correspond to that cell.
        if score_current == score_diagonal + match_score(seq1[j - 1], seq2[i - 1], gap_penalty):
            align1.append(seq1[j - 1])
            align2.append(seq2[i - 1])
            i -= 1
            j -= 1
        elif score_current == score_up + gap_penalty:
            align1.append(seq1[j - 1])
            align2.append('-')
            j -= 1
        elif score_current == score_left + gap_penalty:
            align1.append('-')
            align2.append(seq2[i - 1])
            i -= 1

    # finish tracing up to the top left cell
    while j > 0:
        align1.append(seq1[j - 1])
        align2.append('-')
        j -= 1
    while i > 0:
        align1.append('-')
        align2.append(seq2[i - 1])
        i -= 1

    # since we traversed the score matrix from the bottom right, our two sequences will be reversed.
    # these two lines reverse the order of the characters in each sequence.
    align1 = align1[::-1]
    align2 = align2[::-1]

    return align1, align2

def error(text, trans):
    error = []
    for i in range(len(text)):
        if text[i] != trans[i]:
            error.append(i)
    if not error:
        return "correct"
    return error

def get_story_idx(story, idx):
  i = 0
  count = 0
  while i < idx:
    if story[i] == '-':
        count += 1
    i += 1
  return idx - count
    

def classify_new(story, trans):
  errors = []
  cur_s = story
  cur_t = trans
  start = 0
  end = len(cur_s) - 1
  
  # ignore unrelated chatter in the beginning
  while cur_s[start] == '-': start += 1
      
  # ignore unrelated chatter in the end
  while cur_s[end] == '-': end -= 1
  
  prev_correct = end
  
  while end >= start:
    if cur_s[end] == cur_t[end]:
      prev_checked = end
      prev_correct = end
      error = None
    elif cur_s[end] == '-':
      if cur_t[end] in cur_s:
        error = 'correct-repetition'
        word = cur_t[end]
        idx = cur_s.index(cur_t[end])
      elif is_similar(cur_t[end], cur_t[prev_correct]) or cur_t[end] in cur_t[prev_correct]:
        error = 'correct - self-correction'
        word = cur_s[prev_correct]
        idx = prev_correct
      else:
        # this is unrelated chatter but we will ignore it for now
        error = None
        word = cur_s[prev_checked]
        idx = prev_checked
    elif cur_t[end] == '-':
      error = 'miscue - skip'
      word = cur_s[end]
      idx = end
    else:
      prev_checked = end
      error = 'miscue - substitution'
      word = cur_s[end]
      idx = end
    if error is not None:
      errors.append([get_story_idx(story, idx), word, error])
    
    end -= 1
  return errors[::-1]
  


def classify_sent(text, trans):
    # convert string to list
    ltext = text.split(" ")
    ltrans = trans.split(" ")

    # align text and transcript
    aligned_text, aligned_trans = needleman_wunsch(ltext, ltrans)
    
    # classify errors
    return classify_new(aligned_text, aligned_trans)

def frontend():
    #front end data
    with open('story_text.txt') as f:
        lines = f.readlines()

    with open('transcript.txt') as f:
        transcript = f.readlines()

    story_text = lines[0].split(". ")

    for i in range(len(story_text)):
        story_text[i] = story_text[i].lower().translate(str.maketrans('', '', string.punctuation))

    for i in range(len(transcript)):
        transcript[i] = transcript[i].lower().translate(str.maketrans('', '', string.punctuation)).replace("\n","").replace("  ", "")

    data = {'story_text':story_text, 'transcript':transcript}
    fdf = pd.DataFrame(data)
    fdf['classify'] = fdf.apply(lambda x: classify_sent(x.story_text, x.transcript), axis = 1)

    error = fdf['classify'].tolist()
    sent_index = []
    error_index = []
    error_word = []
    error_type = []
    for s_index in range(len(error)):
        for es in error[s_index]:
            sent_index.append(s_index)
            error_index.append(es[0])
            error_word.append(es[1])
            error_type.append(es[2])

    error_data = {'sent_index':sent_index, 'error_index':error_index, 'error_word':error_word,'error_type':error_type}
    error_df = pd.DataFrame(error_data)
    return story_text, transcript, error_df.to_dict('list')