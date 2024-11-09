﻿using Naseej_Project.Models;

namespace Naseej_Project.DTOs
{
    public class TestimonialDTO
    {
        public int Id { get; set; }

        public int? UserId { get; set; }

        public string? Firstname { get; set; }

        public string? Lastname { get; set; }

        public string? TheTestimonials { get; set; }

        public bool? Isaccepted { get; set; }

        public string? Email { get; set; }

        public virtual User? User { get; set; }
    }
}
