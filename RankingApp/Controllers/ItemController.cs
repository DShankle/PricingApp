using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<ItemModel> Items = new[]
        {
            new ItemModel{ Id = 1, Title = "Big Mac", ImageId=1, CurrentPrice=2.99f, Calories=600, ImagePath="/bigmac.jpg", ItemType=1 },
            new ItemModel{ Id = 2, Title = "Whopper", ImageId=2, CurrentPrice=3.45f, Calories=400, ImagePath = "/whopper.png",ItemType=1 },
            new ItemModel{ Id = 3, Title = "Arby's", ImageId=3, CurrentPrice=1.98f, Calories=500, ImagePath = "/arbys.png",ItemType=1 },
            new ItemModel{ Id = 4, Title = "Five Guys", ImageId=4, CurrentPrice=4.99f, Calories=700, ImagePath = "/fiveguys.jpg",ItemType=1 },
            new ItemModel{ Id = 5, Title = "Steak and Shake", ImageId=5, CurrentPrice=4.89f, Calories=450, ImagePath = "/steakandshake.jpeg" ,ItemType=1 }
        };

        [HttpGet("{itemType:int}")]
        public ItemModel[] Get(int itemType)
        {
            ItemModel[] items = Items.Where(i => i.ItemType == itemType).ToArray();
            return items;
        }
    }

}
