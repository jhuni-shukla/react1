import ProgressBar from 'react-bootstrap/ProgressBar';
import { AiFillAccountBook } from "react-icons/ai";

function BasicExample() {
  return (
    <div>
        <h2>Progress Bars</h2>
        <ProgressBar variant="success" now={40} />
        <ProgressBar variant="info" now={20} />
        <ProgressBar variant="warning" now={60} />
        <ProgressBar variant="danger" now={80} />
        <h2>I am icons of MUI</h2>
        <h1><AiFillAccountBook /></h1>
    </div>
  )
}

export default BasicExample;