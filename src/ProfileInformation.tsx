import { capitalize, formatPhoneNumber } from "./utils/transformations";

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow = ({ label, value }: InfoRowProps) => {
  return (
    <div>
      <span style={{ marginRight: 5 }}>
        <b>{label}:</b>
      </span>
      <span>{value}</span>
    </div>
  );
};

//this is what gets rendered on top as soon as the user submits all valid information in the form input fields
//this is imported by both functional and class app
export type UserInfoType = {
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    phone: string[];
}

interface ProfileInfoProps {
  userData: UserInfoType | null;
}

export const ProfileInformation = ({ userData }: ProfileInfoProps) => {
  if (!userData) {
    return (
      <>
        <u>
          <h3>Your Submitted User Information</h3>
        </u>
        <div className="user-info">
          <div>No information provided</div>
        </div>
      </>
    );
  }

  const { firstName, lastName, email, city, phone } = userData;

  return (
    <>
      <u>
        <h3>Your Submitted User Information</h3>
      </u>
      <div className="user-info">
        <InfoRow label="First Name" value={capitalize(firstName)} />
        <InfoRow label="Last Name" value={capitalize(lastName)} />
        <InfoRow label="Email" value={email} />
        <InfoRow label="City" value={city} />
        <InfoRow label="Phone" value={formatPhoneNumber(phone)} />
      </div>
    </>
  );
};
