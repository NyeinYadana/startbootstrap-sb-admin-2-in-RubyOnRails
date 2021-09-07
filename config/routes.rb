Rails.application.routes.draw do
  root 'dashboard#index'
  get 'login', to: 'dashboard#login', as: 'login'
  get 'register', to: 'dashboard#register', as: 'register'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
