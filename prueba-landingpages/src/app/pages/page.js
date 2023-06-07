import React from 'react';
import Header from '../../components/Header';
import '../../styles/Formulario.css';

const Form = () => {
    return(
        <>
            <Header />
            <section className='formulario'>
                <form action="/action_page.php">
                    <div className="inputs">
                        <label for="fname" className='label'>First name:</label>
                        <input type="text" id="fname" name="fname" value="John"/>
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" value="Doe"/>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Form;