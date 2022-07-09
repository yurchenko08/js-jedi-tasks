// Error Throwing - Error Handling #2 https://www.codewars.com/kata/55e7650c8d894146be000095/
function validateMessage(msg) {
  if (msg == null) throw new ReferenceError("Message is null!");
  if (typeof msg !== "string")
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`
    );
  if (msg.includes("<") && msg.includes(">")) return false;
  if (msg.length > 255 || msg.length == 0)
    throw new RangeError(`Message contains ${msg.length} characters!`);
  return true;
}
