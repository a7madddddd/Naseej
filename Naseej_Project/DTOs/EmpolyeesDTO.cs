﻿namespace Naseej_Project.DTOs
{
    public class EmpolyeesDTO
    {
        public string? FullName { get; set; }

        public string? Email { get; set; }

        public string? Image { get; set; }

        public string? PasswordHash { get; set; }
        public bool? IsAdmin { get; set; }

        public string? PasswordSalt { get; set; }
    }
}
