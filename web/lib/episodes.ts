export type SeasonEpisode = {
  number: number;
  songTitle: string;
  synopsis: string;
  /** Present when a teleplay page exists */
  scriptSlug?: string;
};

export const season1Episodes: SeasonEpisode[] = [
  {
    number: 1,
    songTitle: "Spirit in the Sky",
    synopsis:
      "The deal is struck. Desmond sells his dream in a pawn shop and receives the supernatural guitar. First taste of god-tier talent. Ends with the golden wings closing in as he hits the road to California.",
    scriptSlug: "spirit-in-the-sky",
  },
  {
    number: 2,
    songTitle: "Born to Run",
    synopsis:
      "Desmond and Layla burn rubber west. Tramps like us. First real crowds, first taste of freedom, and the first hint that the deal has strings attached.",
    scriptSlug: "born-to-run",
  },
  {
    number: 3,
    songTitle: "Hollywood Nights",
    synopsis:
      "LA arrival. Glitz, A&R seduction, first big show. The city swallows them. First real moral compromise.",
    scriptSlug: "hollywood-nights",
  },
  {
    number: 4,
    songTitle: "Tiny Dancer",
    synopsis:
      "Desmond becomes the star. Layla as muse. One perfect night in the spotlight — before the cracks spiderweb.",
    scriptSlug: "tiny-dancer",
  },
  {
    number: 5,
    songTitle: "(Don’t Fear) The Reaper",
    synopsis:
      "Layla’s poetic death under the Reaper’s shadow. Desmond chooses revenge over grief. The deal begins to collect.",
  },
  {
    number: 6,
    songTitle: "Heroin",
    synopsis:
      "The long spiral. Isolation, drugs, the day the music really dies. American dream corrupted.",
  },
  {
    number: 7,
    songTitle: "Sympathy for the Devil",
    synopsis:
      "The Man appears openly. Desmond meets his “guides from Hell.” The deal deepens.",
  },
  {
    number: 8,
    songTitle: "Riders on the Storm",
    synopsis:
      "Molly enters. Highway betrayal energy. The Captain Farrell treasure/murder subplot. Des pulls the trigger in the rain.",
  },
  {
    number: 9,
    songTitle: "Wish You Were Here",
    synopsis:
      "Prison years. Flashbacks to Layla. “Two lost souls…” Deep regret. The guitar calls to him in his cell.",
  },
  {
    number: 10,
    songTitle: "The Man in Black",
    synopsis:
      "Escape. The Man in Black offers freedom for one final job. Judgment tone. Desmond confronts the monster he’s become.",
  },
  {
    number: 11,
    songTitle: "Aqualung",
    synopsis:
      "Revenge climax. Desmond reaches the dying mark. Watches him die cold and alone. Contract seems fulfilled… but the real price reveals itself.",
  },
  {
    number: 12,
    songTitle: "Hotel California",
    synopsis:
      "Arrival at the shimmering hotel. Seduction, last guitar performance, horrifying realization: You can never leave. Season-ending cliffhanger.",
  },
];
