namespace RankingApp.Models
{
    public class ItemModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int ImageId { get; set; }
        public float CurrentPrice { get; set; }
        public int Calories { get; set; }
        public int ItemType { get; set; }
        public string ImagePath { get; set; }
    }
}
