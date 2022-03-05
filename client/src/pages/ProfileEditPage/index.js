import "./styles.css";
import ProfileEditForm from "../../components/ProfileEditForm";

export default function ProfileEditPage() {
    return(
        <div className="profilePage">
            <h3>Edit Profile</h3>
            <ProfileEditForm />
        </div>
    )
}