import cohere

from documents import documents, documents2
from ubc import ubc

co = cohere.Client("LL0rLbI86gPFcJQcDCDtkIQj9Hae2nK6zwU7C5dC")

message = "How many credits is ACAM 350?"

# Generate the response
response = co.chat_stream(message=message, document=documents)
print(response)

# Display the response
citations = []
cited_documents = []

print(response.text)

for event in response:
    if event.event_type == "text-generation":
        print(event.text, end="")
    elif event.event_type == "citation-generation":
        citations.extend(event.citations)
    elif event.event_type == "stream-end":
      cited_documents = event.response.documents

# Display the citations and source documents
if citations:
  print("\n\nCITATIONS:")
  for citation in citations:
    print(citation)

  print("\nDOCUMENTS:")
  for document in cited_documents:
    print(document)