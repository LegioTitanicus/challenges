require 'pry'
require_relative 'lib/hand'

# Note: we only need `require_relative` if we end up calling a class by name in our file's logic. As such, you may have to add more `require_relative` statements accordingly.
require_relative "lib/deck"
# require_relative "lib/card"

def winner(player_1, player_2)
    if player_1.value > player_2.value
        return "Player 1"
    elsif player_2.value > player_1.value
        return "Player 2"
    else
        while player_1.value = player_2.value
            tie(deck)
        end
    end
end

def tie(deck)
    player_1 = deck.deal
    player_2 = deck.deal
    if player_1.value > player_2.value
        return "Player 1"
    elsif player_2.value > player_1.value
        return "Player 2"
    else 
end
puts "GAME START \n\n"

deck = Deck.new

puts "There are #{deck.cards.count} cards."

player_1 = Hand.new(deck.deal_four)
player_2 = Hand.new(deck.deal_four)

puts "Player 1 was dealt #{player_1.display_hand}"
puts "Player 2 was dealt #{player_2.display_hand}"
puts "\n"
# fix trailing comma

puts "Player 1's hand value: #{player_1.value}"
puts "Player 2's hand value: #{player_2.value}"
puts "\n"

winner_winner = winner(player_1, player_2)

puts "#{winner_winner} wins the game!"