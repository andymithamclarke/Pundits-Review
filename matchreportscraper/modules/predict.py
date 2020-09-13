# =========================
# This file contains a function to predict the sentiment of phrases within a football match report
# =========================


# The function uses a trained classifier and vectorizer which have been pickled and saved as 'gzip' files in the pickles directory of this project

# It will loop through the dictionary passed as a parameter and extract a list of lemmatized no stopwords phrases
# It will then make a prediction based on a vectorized form of the lemmatized no stopwords phrases
# It will return a list of predictions for each phrase as either 'POSITIVE', "NEUTRAL" or "NEGATIVE"


# =============
#  IMPORTS 
# =============

import pickle
import gzip

# Pickles


# Read in model
model_infile = gzip.open("./matchreportscraper/modules/pickles/model.gzip",'rb')

# Save instance of model
model = pickle.load(model_infile)

# Close file
model_infile.close()




# Import the vectorizer
vectorizer_infile = gzip.open("./matchreportscraper/modules/pickles/vectorizer.gzip",'rb')

# Save instance of vectorizer
vectorizer = pickle.load(vectorizer_infile)

# Close file
vectorizer_infile.close()


# =============
# PREDICT
# =============


def predict(dictionary):
    
    # Sentence List
    sentences = [dictionary['lemmatized_no_stopwords_phrase']]
    
    # Iterate through sentences list and make predictions
    predictions = model.predict(vectorizer.transform(sentences))

    # Add Predictions to dictionary
    dictionary['sentiment'] = predictions[0]
        
    # Return List of Predictions
    return dictionary



