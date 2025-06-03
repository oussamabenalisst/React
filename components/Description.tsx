type DescriptionProps = {
  var: string;
  // var? : string opsion
};
function Description(text: DescriptionProps){
  return(
    <p>
      {text.var}
    </p>
  )
}
export default Description  ;