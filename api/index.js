import emojify from 'emojify-string'

export default (req, res) => {
  try {
    const { query, body } = req
  
    const options = {
      ...query,
      ...body,
    }
  
    const parsedString = emojify({
      text: options.text || 'hi',
      background: options.background || ':jack_o_lantern:',
      font: options.font || ':invisibleparrot:',
    })
  
    res.send(parsedString)
  } catch (error) {
    res.status(500).send(error.message)
  }
}