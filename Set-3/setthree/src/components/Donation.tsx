import React from "react";
type Donations = {
  id: number;
  name: string;
  Donation: number;
};
type Props = {
  DonationData: Donations[];
};

const Donation = ({ DonationData }: Props) => {
  const totalDonation = (DonationData: Donations[]): number => {
    return DonationData.reduce((acc: number, curr: Donations) => {
      acc += curr.Donation;
      return acc;
    }, 0);
  };
  return (
    <div style={{ border: "1px solid", marginTop: "10px" }}>
      <p>Total Donation Collected: {totalDonation(DonationData)}</p>
    </div>
  );
};

export default Donation;
