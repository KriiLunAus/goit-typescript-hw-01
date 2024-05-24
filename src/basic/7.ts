type Pages = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {
    createAt: Date,
    updateAt: Date,
  }
}

const pages: Pages[] = [
    {
    title: "Exploring the Mountains",
    likes: 150,
    accounts: ["user123", "adventurer42", "nature_lover"],
    status: "open",
    
  },
  {
    title: "Cooking Masterclass",
    likes: 320,
    accounts: ["chef_john", "foodie89", "culinaryqueen"],
    status: "close",
    details: {
      createAt: new Date('2022-10-10T14:30:00Z'),
      updateAt: new Date('2023-01-12T09:45:00Z'),
    }
  },
  {
    title: "Tech Innovations 2024",
    likes: 540,
    accounts: ["tech_guru", "innovator007", "future_seeker"],
    status: "open",
    details: {
      createAt: new Date('2024-01-05T08:20:00Z'),
      updateAt: new Date('2024-04-22T11:10:00Z'),
    }
  },
  {
    title: "Gardening Tips & Tricks",
    likes: 275,
    accounts: ["green_thumb", "plantlover", "garden_expert"],
    status: "close",
    details: {
      createAt: new Date('2023-06-18T13:00:00Z'),
      updateAt: new Date('2023-08-25T16:30:00Z'),
    }
  },
  {
    title: "Travel Diaries",
    likes: 410,
    accounts: ["globetrotter", "wanderlust", "traveller_jane"],
    status: "open",
    details: {
      createAt: new Date('2023-02-20T09:00:00Z'),
      updateAt: new Date('2023-03-05T18:00:00Z'),
    }
  },
  {
    title: "Fitness Challenges",
    likes: 225,
    accounts: ["fit_fanatic", "gym_rat", "health_journey"],
    status: "close"
  },
  {
    title: "Book Reviews",
    likes: 180,
    accounts: ["bookworm", "literary_lover", "novel_nut"],
    status: "open",
    
  },
  {
    title: "Art & Creativity",
    likes: 340,
    accounts: ["artsy_amy", "creative_mind", "design_dreamer"],
    status: "open",
    details: {
      createAt: new Date('2023-04-22T11:15:00Z'),
      updateAt: new Date('2023-05-29T10:05:00Z'),
    }
  },
  {
    title: "Music Trends",
    likes: 295,
    accounts: ["melody_master", "rhythm_rider", "sound_seeker"],
    status: "close",
    details: {
      createAt: new Date('2022-11-25T15:30:00Z'),
      updateAt: new Date('2023-02-14T17:45:00Z'),
    }
  },
  {
    title: "Photography Guide",
    likes: 410,
    accounts: ["shutterbug", "lens_lady", "photo_pro"],
    status: "open",
    details: {
      createAt: new Date('2023-07-05T08:00:00Z'),
      updateAt: new Date('2023-08-10T13:00:00Z'),
    }
  }
]