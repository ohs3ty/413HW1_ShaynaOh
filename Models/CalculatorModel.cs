using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace _413HW1_ShaynaOh.Models
{
    public class CalculatorModel
    {
        //Validation
        [Range(0, 100)]
        public int assignment { get; set; }
        [Range(0, 100)]
        public int project { get; set; }
        [Range(0, 100)]
        public int quiz { get; set; }
        [Range(0, 100)]
        public int exam { get; set; }
        [Range(0, 100)]
        public int intex { get; set; }
    }
}
