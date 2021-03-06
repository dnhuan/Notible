import axios from "axios";

export default class ChatfuelAPI {
  sendText(senderId, msg) {
    return new Promise(resolve => {
      axios
        .post(
          `https://api.chatfuel.com/bots/${
            process.env.BOT_ID
          }/users/${
            senderId
          }/send?chatfuel_token=${
            process.env.TOKEN_CHATFUEL
          }&chatfuel_block_id=${process.env.TEXT_BLOCK}`, {
            textReply: msg
          }
        )
        .then(res => resolve(res))
        .catch(err => {
          if (err) throw err
        });
    });
  }
  sendImage(senderId, payload) {
    return new Promise(resolve => {
      axios
        .post(
          `https://api.chatfuel.com/bots/${
            process.env.BOT_ID
          }/users/${
            senderId
          }/send?chatfuel_token=${
            process.env.TOKEN_CHATFUEL
          }&chatfuel_block_id=${process.env.IMAGE_BLOCK}`, {
            urlImage: payload
          }
        )
        .then(res => resolve(res))
        .catch(err => {
          if (err) throw err
        });
    });
  }
  sendVoice(senderId, payload) {
    return new Promise(resolve => {
      axios
        .post(
          `https://api.chatfuel.com/bots/${
            process.env.BOT_ID
          }/users/${
            senderId
          }/send?chatfuel_token=${
            process.env.TOKEN_CHATFUEL
          }&chatfuel_block_id=${process.env.VOICE_BLOCK}`, {
            urlVoice: payload
          }
        )
        .then(res => resolve(res))
        .catch(err => {
          if (err) throw err
        });
    });
  }
}