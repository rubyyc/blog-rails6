Rails.application.routes.draw do
  resources :users
  get 'login' => 'users#login'
  namespace :admin do
    get 'home/index'
  end
  resources :posts
  root 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
