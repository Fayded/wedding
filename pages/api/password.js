export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  console.log(req.body)
  if(req.body.toLowerCase() === 'bright') {
    res.status(200).json({ pw: true })  
  }
}