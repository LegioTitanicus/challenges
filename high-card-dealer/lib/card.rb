class Card
  # Your code here

  # Methods you may need:
  def initialize(rank, suit)
    @rank = rank 
    @suit = suit
  end

  def display
    "#{@rank}#{@suit}"
  end
  def value
    if @rank.is_a?(Integer)
      return @rank
    elsif  @rank == "J"
      return 11
    elsif  @rank == "Q"
      return 12
    elsif  @rank == "K"
      return 13
    else
      return 14
    end
  end
  
  # - initialize
  # - method that assigns a card its "value"
  # - attribute readers
  # - any other methods you deem necessary
end
