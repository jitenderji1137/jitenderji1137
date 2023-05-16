import "./Left.css";
import { AiFillGithub , AiOutlineInstagram} from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { TbBrandWhatsapp } from "react-icons/tb";
export default function Left(){
    return(
        <>
        <div className="Left">
            <ul>
                <li><a href="https://github.com/jitenderji1137" target="_blank" rel="nofollow noopener noreferrer"><AiFillGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/jitender1137/" target="_blank" rel="nofollow noopener noreferrer"><GrLinkedinOption/></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=918307056141" target="_blank" rel="nofollow noopener noreferrer"><TbBrandWhatsapp/></a></li>
                <li><a href="https://www.instagram.com/vijayji1137/" target="_blank" rel="nofollow noopener noreferrer"><AiOutlineInstagram/></a></li>
            </ul>
        </div>
        </>
    );
}