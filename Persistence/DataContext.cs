using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Domain;

namespace Persistence
{
public class DataContext : DbContext
    {
        
        public DbSet<Value> Values { get; set; }

        public DbSet<Post> Posts { get; set; }
        
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DataContext(){

        }
        
}
}