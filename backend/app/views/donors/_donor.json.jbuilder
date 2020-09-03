json.extract! donor, :id, :nome, :tipo, :idade, :email, :senha, :created_at, :updated_at
json.url donor_url(donor, format: :json)
