import cohere
examples = [
    cohere.ClassifyExample(
        text="Can I get the full course description?", label="full"),
    cohere.ClassifyExample(
        text="Give me more information about this course.", label="full"),
    cohere.ClassifyExample(
        text="What are the prerequisites for this course?", label="partial"),
    cohere.ClassifyExample(
        text="What co-requisites are needed for this course?", label="partial"),
    cohere.ClassifyExample(
        text="Which courses can I take after this one?", label="partial"),
    cohere.ClassifyExample(
        text="What grades do I need to pass this course?", label="partial"),
    cohere.ClassifyExample(
        text="Can you tell me about the professor's rating?", label="partial"),
    cohere.ClassifyExample(
        text="Could you give me the course description?", label="full"),
    cohere.ClassifyExample(
        text="What is the course code for this class?", label="partial"),
    cohere.ClassifyExample(
        text="What's the course name?", label="partial"),
    cohere.ClassifyExample(
        text="How many credits is this course worth?", label="partial"),
    cohere.ClassifyExample(
        text="I'd like to know the full details of the course.", label="full"),
    cohere.ClassifyExample(
        text="What's the grading breakdown for this course?", label="partial"),
    cohere.ClassifyExample(
        text="Can I get the professor's name and rating?", label="partial"),
    cohere.ClassifyExample(
        text="Please provide a detailed course description.", label="full"),
    cohere.ClassifyExample(
        text="What are the course prerequisites and co-requisites?", label="partial"),
    cohere.ClassifyExample(
        text="Is there any course dependent on this one?", label="partial"),
    cohere.ClassifyExample(
        text="Could I get more information on the credits for this course?", label="partial"),
    cohere.ClassifyExample(
        text="Could you give me an overview of the course?", label="full"),
    cohere.ClassifyExample(
        text="What's the professor's rating for this class?", label="partial"),
    cohere.ClassifyExample(
        text="How many credits is this class?", label="partial"),
    cohere.ClassifyExample(
        text="Can you provide the full course outline?", label="full"),
    cohere.ClassifyExample(
        text="What are the co-requisites for this course?", label="partial"),
    cohere.ClassifyExample(
        text="Which courses does this course depend on?", label="partial"),
    cohere.ClassifyExample(
        text="Can you tell me the course credits?", label="partial"),
    cohere.ClassifyExample(
        text="I need the complete course information.", label="full"),
    cohere.ClassifyExample(
        text="Who is the professor for this course and how is their rating?", label="partial"),
    cohere.ClassifyExample(
        text="give me more information about this course.", label="full"),
    cohere.ClassifyExample(
        text="What are the prerequisites and dependent courses?", label="partial"),
    cohere.ClassifyExample(
        text="Can you share the grading scheme for this course?", label="partial"),
    cohere.ClassifyExample(
        text="What is the name of this course?", label="partial"),
    cohere.ClassifyExample(
        text="I need a detailed description of this course.", label="full"),
    cohere.ClassifyExample(
        text="Does this course have any prerequisites?", label="partial"),
    cohere.ClassifyExample(
        text="Can I get the course description and professor information?", label="partial"),
    cohere.ClassifyExample(
        text="What's the grading policy for this course?", label="partial"),
    cohere.ClassifyExample(
        text="Is there a co-requisite for this course?", label="partial"),
    cohere.ClassifyExample(
        text="Can you tell me about the courses I can take after this one?", label="partial"),
    cohere.ClassifyExample(
        text="Could you give me the full course details?", label="full"),
    cohere.ClassifyExample(
        text="What are the prerequisites and credits for this course?", label="partial"),
    cohere.ClassifyExample(
        text="I need information about the professor's rating and the course syllabus.", label="partial"),
    cohere.ClassifyExample(
        text="What's the full description of this course?", label="full"),
    cohere.ClassifyExample(
        text="Does this course have any co-requisites or dependencies?", label="partial"),
    cohere.ClassifyExample(
        text="Can you provide the course code?", label="partial"),
    cohere.ClassifyExample(
        text="Please share the course name and credits.", label="partial"),
    cohere.ClassifyExample(
        text="Could you tell me the professor's rating and grade breakdown?", label="partial"),
    cohere.ClassifyExample(
        text="What's the detailed course description?", label="full"),
    cohere.ClassifyExample(
        text="How many credits does this course offer?", label="partial"),
    cohere.ClassifyExample(
        text="Who teaches this course, and what are their ratings?", label="partial"),
    cohere.ClassifyExample(
        text="I would like the course prerequisites and grading structure.", label="partial"),
    cohere.ClassifyExample(
        text="Can I get all the details for this course?", label="full")]
