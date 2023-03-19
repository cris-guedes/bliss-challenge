export type TQuestion = {
  id: number
  question: string
  image_url: string
  thumb_url: string
  published_at: Date
  choices: Choice[]
}

type Choice = {
  choice: string
  votes: number
}
