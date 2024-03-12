using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace APIPractice.Models
{
    public class EFBowlingLeagueRepository : IBowlingLeagueRepository
    {
        private BowlingLeagueContext _context;

        public EFBowlingLeagueRepository(BowlingLeagueContext context)
        {
            _context = context;
        }

        public IEnumerable<Bowler> Bowlers
        {
            get
            {
                return _context.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks")
                .ToList();
            }
        }


    }
}

