function Footer(){
  const year=new Date().getFullYear();
  return(
    <footer>
      <p>
        &copy; {year} My Company. All rights reserved.
      </p>
    </footer>
  )
}
export default Footer ; 