import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const SignIn = () => {
  const [error, setError] = useState('')
  const userDocumentRef = doc(collection(db, 'users'));
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {name, email, password} = event.currentTarget.elements;
    try {
      await createUserWithEmailAndPassword(auth,email.value,password.value)
      
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ユーザー名</label>
          <input name="name" type="text" placeholder="name"/>
        </div>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email"/>
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password"/>
          <p>{error}</p>
        </div>
        <button>register</button>
      </form>
      <div>
          ログイン済みの場合は<Link to={'/'}>こちら</Link>から
        </div>
    </div>
  )
}
export default SignIn;