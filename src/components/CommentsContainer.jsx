import React from "react";
import CommentsList from "./CommentsList";

export const commentsData = [
  {
    name: "Alice Wonderland",
    email: "alice.wonderland@example.com",
    text: "I find the exploration of themes in literature fascinating, especially how they reflect society. In particular, the way authors weave cultural, political, and personal experiences into their work has always intrigued me.",
    replies: [
      {
        name: "Bob Builder",
        email: "bob.builder@example.com",
        text: "Absolutely! Literature often serves as a lens through which we can examine societal norms. The layers of complexity in each piece are profound, allowing readers to not only relate but also challenge existing ideologies.",
        replies: [
          {
            name: "Charlie Chocolate",
            email: "charlie.chocolate@example.com",
            text: "Yes, and it can also challenge those norms, sparking necessary conversations. The dialogue between author and reader is almost like a philosophical debate that stretches beyond the pages of the book.",
            replies: [
              {
                name: "Daisy Duke",
                email: "daisy.duke@example.com",
                text: "That's true! The power of words can instigate change. The way a story can influence political movements, change societal views, or even ignite revolutions is incredible.",
              },
            ],
          },
        ],
      },
      {
        name: "Eve Adams",
        email: "eve.adams@example.com",
        text: "I love how different authors approach similar themes in unique ways. Even with the same foundational ideas, no two authors express them in exactly the same way, and that variety is what keeps literature endlessly interesting to me.",
        replies: [
          {
            name: "Frank Castle",
            email: "frank.castle@example.com",
            text: "For sure! Each author's perspective adds a new layer to the discussion. The different angles from which they approach the same theme often add depth and make the reader reflect more deeply.",
          },
        ],
      },
    ],
  },
  {
    name: "George Bailey",
    email: "george.bailey@example.com",
    text: "The role of fiction in education is crucial, as it cultivates empathy and critical thinking. Fiction provides a safe space for students to explore emotions and societal issues they might not encounter in real life.",
    replies: [
      {
        name: "Hannah Baker",
        email: "hannah.baker@example.com",
        text: "Yes! Fiction allows us to walk in someone else's shoes and understand their experiences. It can be a window into another world or a mirror reflecting our own.",
        replies: [
          {
            name: "Ian McKellen",
            email: "ian.mckellen@example.com",
            text: "Exactly! It broadens our horizons and promotes open-mindedness. By seeing the world from different perspectives, we’re able to question our own biases and assumptions, which leads to personal growth.",
          },
          {
            name: "Julia Roberts",
            email: "julia.roberts@example.com",
            text: "And it's not just education; fiction can be a source of comfort and escapism. When life gets too overwhelming, sometimes losing yourself in a story is the best way to reset.",
          },
        ],
      },
    ],
  },
  {
    name: "Kevin Spacey",
    email: "kevin.spacey@example.com",
    text: "I believe that storytelling is an essential part of human culture and heritage. It connects us to our ancestors and preserves our histories for future generations.",
    replies: [
      {
        name: "Laura Croft",
        email: "laura.croft@example.com",
        text: "Storytelling indeed connects generations and preserves history. Without it, much of our cultural heritage would be lost. Every story adds to the tapestry of human experience, creating a living, evolving history.",
        replies: [
          {
            name: "Mark Twain",
            email: "mark.twain@example.com",
            text: "Not only that, but it also inspires creativity in people of all ages. When you read an imaginative story, it makes you think differently, dream bigger, and perhaps even start crafting your own tales.",
          },
          {
            name: "Nina Simone",
            email: "nina.simone@example.com",
            text: "Storytelling can empower individuals to express themselves authentically.",
          },
        ],
      },
    ],
  },
  {
    name: "Olivia Benson",
    email: "olivia.benson@example.com",
    text: "The impact of diverse voices in literature cannot be overstated; it enriches our understanding of the human experience by offering perspectives we may not have considered before.",
    replies: [
      {
        name: "Peter Parker",
        email: "peter.parker@example.com",
        text: "Diversity brings fresh perspectives, making literature more relatable to a wider audience.",
        replies: [
          {
            name: "Quinn Fabray",
            email: "quinn.fabray@example.com",
            text: "Absolutely! It helps us to appreciate the richness of different cultures.",
          },
          {
            name: "Ray Charles",
            email: "ray.charles@example.com",
            text: "Plus, it encourages empathy, which is essential for a harmonious society. Reading stories from marginalized voices helps create a more inclusive world.",
          },
        ],
      },
    ],
  },
  {
    name: "Sophia Loren",
    email: "sophia.loren@example.com",
    text: "I find the evolution of literature through the ages particularly intriguing.",
    replies: [
      {
        name: "Tom Hanks",
        email: "tom.hanks@example.com",
        text: "The transformation in writing styles and themes reflects the changing times perfectly. It’s fascinating to think about how societal changes influenced writers and their work, and how writers themselves sometimes influenced those changes.",
        replies: [
          {
            name: "Uma Thurman",
            email: "uma.thurman@example.com",
            text: "Indeed! It’s fascinating to see how historical events shape literary movements.",
          },
        ],
      },
      {
        name: "Vincent van Gogh",
        email: "vincent.vangogh@example.com",
        text: "It's also interesting to see how new technologies influence the way stories are told. From the printing press to the internet, each innovation has expanded the reach of stories to new audiences.",
        replies: [
          {
            name: "Winston Churchill",
            email: "winston.churchill@example.com",
            text: "Exactly! The digital age has opened new avenues for storytelling, from ebooks to podcasts to interactive storytelling experiences.",
          },
        ],
      },
    ],
  },
  {
    name: "Xena Warrior",
    email: "xena.warrior@example.com",
    text: "Books have the power to change lives and open minds. It's a beautiful thing. There are few things in the world that can inspire, educate, and entertain all at once.",

  },
];


const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-2xl font-medium my-8 inline-block border-b-2 border-black ml-10 2xl:text-5xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer