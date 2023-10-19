function createQR(lang_key, user_id, a, b) {
    const l = (lang_key === "kr") ? "" : lang_key + "_";
    const qrElement = document.getElementsByClassName("QRcode")[0];
    const qrCodeOptions = {
      text: `https://testwith.co.kr/${l}testWith_QR_v/id=${a}${user_id}${b}`,
      width: 198,
      height: 198,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    };
    
    const qrcode = new QRCode(qrElement, qrCodeOptions);
    qrcode.clear();
    qrcode.makeCode(`https://testwith.co.kr/${l}testWith_QR_v/id=${a}${user_id}${b}`);
  }