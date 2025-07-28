// This is just an example of how to create a seed file for Strapi.
async function example() {
  const reviews = [
    {
      source: "Google",
      review_id: "g12345",
      rating: 5,
      user_name: "Alice Smith",
      comment: "Amazing service and fast delivery!",
      user_thumbnail: "https://example.com/alice.jpg",
      date: "2025-07-01",
    },
    {
      source: "Trustpilot",
      review_id: "t67890",
      rating: 4,
      user_name: "Bob Lee",
      comment: "Good quality products, will buy again.",
      user_thumbnail: "https://example.com/bob.jpg",
      date: "2025-06-15",
    },
    {
      source: "Yelp",
      review_id: "y54321",
      rating: 3,
      user_name: "Carol Danvers",
      comment: "Decent experience, but shipping was slow.",
      user_thumbnail: "https://example.com/carol.jpg",
      date: "2025-05-20",
    },
  ]
  await Promise.all(reviews.map((review) => strapi.documents("api::review.review").create({ data: review })))
}

module.exports = example
