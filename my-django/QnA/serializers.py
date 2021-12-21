from rest_framework import serializers
from .models import QnA as QnA

class QnASerializer(serializers.Serializer):
    title = serializers.CharField()
    body = serializers.CharField()
    writer = serializers.CharField()
    review = serializers.CharField()
    update_at = serializers.CharField()

    class Meta:
        model = QnA
        fields = '__all__'

    def create(self, validated_data):
        return QnA.objects.create(**validated_data)

    def update(self, instance, validated_data):
        QnA.objects.filter(pk=instance.id).update(**validated_data)