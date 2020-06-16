require 'sinatra'

require "pry" if development? || test?
require "sinatra/reloader" if development?


set :bind, '0.0.0.0'  # bind to all interfaces

get '/articles' do
  #  @articles = articles.csv

  erb :articles
end

get '/articles/new' do
  "redirect to articles"
  erb :new_articles
end

get '/' do
  "redirect to articles"
  erb :articles
end

post '/articles/new' do
  article = params['article_title','URL','description']
  binding.pry
  File.open('articles.csv', 'a') do |file|
    file.puts(article)
  end
  
  redirect '/'
end
