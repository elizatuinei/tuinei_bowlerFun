export type Bowler = {
  bowlerId: number;
  bowlerCity: string;
  bowlerFirstName: string;
  bowlerMiddleInit: string;
  bowlerLastName: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  bowlerAddress: string;
  team: {
    teamId: number;
    teamName: string;
  };
};
