Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :bills, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :friends, only: [:create, :destroy]
  end

  
end
