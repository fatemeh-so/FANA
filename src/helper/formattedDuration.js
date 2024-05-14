export function formatDuration  (duration="00:03:33") {
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
export function formatToSecs (duration="00:03:33") {
  const [hours, minutes, seconds] = duration.split(':').map(Number)

  const totalSeconds = hours * 3600 + minutes * 60 + seconds
  return totalSeconds
}


export function convertSecondsToTime(seconds) {
  seconds = parseInt(seconds); // Convert to integer to remove decimal part
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;

}
