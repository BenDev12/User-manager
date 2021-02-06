import randomstring from "randomstring";

const VarificationCode = () => {
  return randomstring.generate(15);
};
export default VarificationCode;
