from trainingclass import examples
import cohere
from descriptions import desc
from ubc import ubc

co = cohere.Client("LL0rLbI86gPFcJQcDCDtkIQj9Hae2nK6zwU7C5dC")

def callToRag(message, history):
    responseRank = co.rerank(
        model="rerank-english-v3.0",
        query=message,
        documents=desc,
        top_n=10
    )

    relevantcourses = []
    for rankobject in responseRank.results:
        index = rankobject.index
        relevantcourses.append(ubc[index])
    response = co.chat(
        message=message, documents=relevantcourses, chat_history=history)
    print(response)

    # Display the response
    citations = []
    cited_documents = []

    return response

    # for event in response:
    #     if event.event_type == "text-generation":
    #         print(event.text, end="")
    #     elif event.event_type == "citation-generation":
    #         citations.extend(event.citations)
    #     elif event.event_type == "stream-end":
    #         cited_documents = event.response.documents


# callToRag("What are the prerequisite courses for CPSC 330?", [{"role": "USER", "text": "My favorite color is green"}])


def classify_text(inputs, examples):
    """
    Classifies a list of input texts given the examples
    Arguments:
        model (str): identifier of the model
        inputs (list[str]): a list of input texts to be classified
        examples (list[Example]): a list of example texts and class labels
    Returns:
        classifications (list): each result contains the text, labels, and conf values
    """

    # Classify text by calling the Classify endpoint
    response = co.classify(
        model='embed-english-v3.0',
        inputs=inputs,
        examples=examples)

    classifications = response.classifications

    return classifications


# # Classify the inputs
# predictions = classify_text([message], examples)

# if (predictions[0].confidence < 0.35):
#     print()


# # Display the citations and source documents
# if citations:
#     print("\n\nCITATIONS:")
#     for citation in citations:
#         print(citation)

#     print("\nDOCUMENTS:")
#     for document in cited_documents:
#         print(document)
