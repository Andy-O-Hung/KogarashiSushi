using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class OrderDetailContext:DbContext
    {
        public OrderDetailContext(DbContextOptions<OrderDetailContext> options) : base(options)
        {

        }

        public DbSet<OrderDetail> PaymentDetails { get; set; }
    }
}
