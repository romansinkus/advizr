import cohere

co = cohere.Client(
    api_key="LL0rLbI86gPFcJQcDCDtkIQj9Hae2nK6zwU7C5dC",
)

stream = co.chat_stream(
    message="Tell me a short story"
)

for event in stream:
    if event.event_type == "text-generation":
        print(event.text, end='')