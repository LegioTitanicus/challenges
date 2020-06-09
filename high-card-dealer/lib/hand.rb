require_relative 'card'

# your code here
class Hand
    attr_reader :player_hand
    def initialize(array_of_cards)
        @player_hand = array_of_cards
    end
    def display_hand
        hand_string = ""
        @player_hand.each do |card|
            hand_string += "#{card.display}, "
        end
        return hand_string
    end
    def value
        total_value = 0
        @player_hand.each do |card|
            total_value += card.value
        end
        return total_value
    end
end
