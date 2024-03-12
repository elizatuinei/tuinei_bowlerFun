namespace APIPractice.Models
{
    public interface IBowlingLeagueRepository
    {
        IEnumerable<Bowler> Bowlers { get; }
    }
}
