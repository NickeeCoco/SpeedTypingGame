import {useState, useRef, useEffect} from "react"

function useWordGame(gameDuration = 10) {
  
  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(gameDuration)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  const textareaRef = useRef(null)

  function handleChange(e) {
    setText(e.target.value)
  }

  function countWords(string) {
    const arr = string.trim().split(' ')
    const wordsArr = arr.filter(word => word !== '')
    return wordsArr.length
  }

  function startGame() {
    setIsGameStarted(true)
    setTimeRemaining(gameDuration)
    setWordCount(0)
    setText('')
    console.log(textareaRef.current)
    textareaRef.current.disabled = false;
    textareaRef.current.focus()
  }

  function endGame() {
    setIsGameStarted(false)
    setWordCount(countWords(text))
  }

  useEffect(() => {

    if(isGameStarted && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }

    if(timeRemaining <= 0) {
      endGame()
    }
  }, [timeRemaining, isGameStarted])

  return {
    text, 
    isGameStarted, 
    textareaRef, 
    timeRemaining, 
    wordCount,
    handleChange, 
    startGame, 
  }
}

export default useWordGame