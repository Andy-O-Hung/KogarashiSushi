using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class OrderDetail
    {
        [Key]
        public int OrdId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string CustomerName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(9)")]
        public string CustomerPhone { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string CardOwnerName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(16)")]
        public string CardNumber { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(5)")]
        public string ExpirationDate { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(3)")]
        public string CVV { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(20)")]
        public string Location { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Email { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Order { get; set; }
    }
}
