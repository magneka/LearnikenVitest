import Button from '../../components/button/Button';


// se button component for test
const ButtonPage = () => {
  return (
    <>
        <h1>Single Button</h1>
        <Button
            label='Test' 
            onClick= {()=> console.log('clicked')}
        /> 
    </>
  )
}

export default ButtonPage