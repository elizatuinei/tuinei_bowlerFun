using APIPractice.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIPractice.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private IBowlingLeagueRepository _bowlingLeagueRepository;
        public BowlingLeagueController(IBowlingLeagueRepository _context) {
            _bowlingLeagueRepository = _context;
        }
        
        [HttpGet]
        public IEnumerable<Bowler> Get()
        {
            var bowlerData = _bowlingLeagueRepository.Bowlers.ToArray();

            return bowlerData;
        }
    }
}
