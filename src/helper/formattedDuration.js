export const formatDuration = (duration) => {
  // Split the duration string into hours, minutes, and seconds
  const [hours, minutes, seconds] = duration.split(':').map(Number)

  // Calculate the total duration in seconds
  const totalSeconds = hours * 3600 + minutes * 60 + seconds

  // Calculate minutes and seconds
  const mins = Math.floor(totalSeconds / 60)
  const secs = totalSeconds % 60

  // Format the result
  return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' : ''}${secs}`
}
export const formatToSecs = (duration) => {
  const [hours, minutes, seconds] = duration.split(':').map(Number)

  const totalSeconds = hours * 3600 + minutes * 60 + seconds
  return totalSeconds
}
