﻿using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace APIPractice.Models;

public partial class Bowler
{
    public int BowlerId { get; set; }

    public string? BowlerLastName { get; set; }

    public string? BowlerFirstName { get; set; }

    public string? BowlerMiddleInit { get; set; }

    public string? BowlerAddress { get; set; }

    public string? BowlerCity { get; set; }

    public string? BowlerState { get; set; }

    public string? BowlerZip { get; set; }

    public string? BowlerPhoneNumber { get; set; }

    public int? TeamId { get; set; }

    [JsonIgnore]
    public virtual ICollection<BowlerScore> BowlerScores { get; set; } = new List<BowlerScore>();

    public virtual Team? Team { get; set; }
}
